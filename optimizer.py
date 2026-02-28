"""
Greedy energy scheduler.
- Allocates solar energy first to highest priority buildings
- Falls back to grid for remaining demand
- Reduces allocation by 50% for flagged (issue-reported) buildings
- Returns a schedule: list of { building_id, allocated_kwh, source }
"""

def run_optimizer(buildings):
    sources = [b for b in buildings if b["type"] == "source"]
    consumers = sorted(
        [b for b in buildings if b["type"] == "consumer"],
        key=lambda x: x["priority"]  # priority 1 first
    )

    solar = next((s for s in sources if s["id"] == "solar_farm"), None)
    grid = next((s for s in sources if s["id"] == "grid"), None)

    solar_remaining = solar["supply"] if solar else 0
    schedule = []

    for building in consumers:
        demand = building["demand"]

        # Reduce demand for flagged buildings
        if building.get("flagged"):
            demand = demand * 0.5
            note = "reduced (flagged issue)"
        else:
            note = "normal"

        solar_used = min(solar_remaining, demand)
        solar_remaining -= solar_used
        grid_used = demand - solar_used

        schedule.append({
            "building_id": building["id"],
            "building_name": building["name"],
            "demand_kwh": building["demand"],
            "allocated_kwh": round(solar_used + grid_used, 2),
            "solar_kwh": round(solar_used, 2),
            "grid_kwh": round(grid_used, 2),
            "flagged": building.get("flagged", False),
            "note": note
        })

    total_solar_used = solar["supply"] - solar_remaining if solar else 0
    total_grid_used = sum(s["grid_kwh"] for s in schedule)
    grid_dependency_pct = round(
        (total_grid_used / (total_solar_used + total_grid_used)) * 100, 1
    ) if (total_solar_used + total_grid_used) > 0 else 0

    return {
        "allocations": schedule,
        "summary": {
            "solar_used_kwh": round(total_solar_used, 2),
            "grid_used_kwh": round(total_grid_used, 2),
            "grid_dependency_pct": grid_dependency_pct,
            "solar_remaining_kwh": round(solar_remaining, 2)
        }
    }
