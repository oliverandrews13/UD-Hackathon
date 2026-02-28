# Mock university campus data
# demand: kWh needed per hour
# supply: kWh generated (solar buildings)
# priority: 1 (critical) to 3 (low)

buildings = [
    {
        "id": "solar_farm",
        "name": "Campus Solar Farm",
        "type": "source",
        "supply": 500,   # kWh generated per hour
        "demand": 0,
        "priority": 1,
        "flagged": False
    },
    {
        "id": "grid",
        "name": "Main Grid",
        "type": "source",
        "supply": 9999,  # unlimited fallback
        "demand": 0,
        "priority": 3,   # use last resort
        "flagged": False
    },
    {
        "id": "dorm_a",
        "name": "Dorm A",
        "type": "consumer",
        "supply": 0,
        "demand": 120,
        "priority": 1,
        "flagged": False
    },
    {
        "id": "dorm_b",
        "name": "Dorm B",
        "type": "consumer",
        "supply": 0,
        "demand": 110,
        "priority": 1,
        "flagged": False
    },
    {
        "id": "library",
        "name": "Library",
        "type": "consumer",
        "supply": 0,
        "demand": 80,
        "priority": 1,
        "flagged": False
    },
    {
        "id": "gym",
        "name": "Gym",
        "type": "consumer",
        "supply": 0,
        "demand": 60,
        "priority": 2,
        "flagged": False
    },
    {
        "id": "lecture_hall",
        "name": "Lecture Hall",
        "type": "consumer",
        "supply": 0,
        "demand": 150,
        "priority": 1,
        "flagged": False
    },
    {
        "id": "research_lab",
        "name": "Research Lab",
        "type": "consumer",
        "supply": 0,
        "demand": 200,
        "priority": 2,
        "flagged": False
    },
    {
        "id": "admin",
        "name": "Admin Building",
        "type": "consumer",
        "supply": 0,
        "demand": 50,
        "priority": 2,
        "flagged": False
    }
]

# Mutable issues log
issues_log = []
