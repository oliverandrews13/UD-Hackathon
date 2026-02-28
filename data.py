import csv
import os

CSV_PATH = os.path.join(os.path.dirname(__file__), 'campus_devices.csv')
ISSUES_PATH = os.path.join(os.path.dirname(__file__), 'issues_log.csv')
ISSUES_FIELDS = ['building_id', 'building_name', 'description', 'severity', 'status']

def load_devices():
    devices = []
    with open(CSV_PATH, newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            devices.append({
                "building_id": row["building_id"],
                "building_type": row["building_type"],
                "device_id": row["device_id"],
                "device_type": row["device_type"],
                "location": row["location"],
                "priority": int(row["priority"]),
                "sheddable_pct": float(row["sheddable_pct"]),
                "min_power_kw": float(row["min_power_kw"]),
                "max_power_kw": float(row["max_power_kw"]),
                "reported_issue": row["reported_issue"].strip() == "True",
            })
    return devices

def get_buildings_summary():
    devices = load_devices()
    buildings = {}
    for d in devices:
        bid = d["building_id"]
        if bid not in buildings:
            buildings[bid] = {
                "id": bid,
                "name": bid.replace("_", " ").title(),
                "type": "source" if d["building_type"] == "source" else "consumer",
                "building_type": d["building_type"],
                "priority": d["priority"],
                "demand": 0,
                "supply": 0,
                "flagged": False,
                "devices": []
            }
        b = buildings[bid]
        b["devices"].append(d)
        if d["reported_issue"]:
            b["flagged"] = True
        if d["building_type"] == "source":
            b["supply"] += d["max_power_kw"]
        else:
            b["demand"] += d["max_power_kw"]
        b["priority"] = min(b["priority"], d["priority"])

    return list(buildings.values())

def flag_device(building_id, flagged=True):
    """Flag or unflag all devices for a building in the CSV."""
    rows = []
    with open(CSV_PATH, newline='') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            if row["building_id"] == building_id:
                row["reported_issue"] = str(flagged)
            rows.append(row)
    with open(CSV_PATH, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

def get_issues():
    """Return only open issues from the CSV."""
    if not os.path.exists(ISSUES_PATH):
        return []
    with open(ISSUES_PATH, newline='') as f:
        reader = csv.DictReader(f)
        return [row for row in reader if row.get('status') != 'resolved']

def add_issue(issue):
    """Append a new open issue to the CSV."""
    file_exists = os.path.exists(ISSUES_PATH)
    with open(ISSUES_PATH, 'a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=ISSUES_FIELDS)
        if not file_exists:
            writer.writeheader()
        writer.writerow({
            'building_id': issue.get('building_id', ''),
            'building_name': issue.get('building_name', ''),
            'description': issue.get('description', ''),
            'severity': issue.get('severity', 'medium'),
            'status': 'open',
        })

def resolve_issue_in_csv(building_id):
    if not os.path.exists(ISSUES_PATH):
        return
    alt_id = building_id.replace('-', '_') if '-' in building_id else building_id.replace('_', '-')
    rows = []
    with open(ISSUES_PATH, newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['building_id'] not in (building_id, alt_id):
                rows.append(row)
    with open(ISSUES_PATH, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=ISSUES_FIELDS)
        writer.writeheader()
        writer.writerows(rows)
