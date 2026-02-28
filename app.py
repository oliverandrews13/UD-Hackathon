from flask import Flask, jsonify, request
from flask_cors import CORS
from optimizer import run_optimizer
from data import get_buildings_summary, load_devices, flag_device, get_issues, add_issue, resolve_issue_in_csv

app = Flask(__name__)
CORS(app)

@app.route('/api/buildings', methods=['GET'])
def get_buildings():
    return jsonify(get_buildings_summary())

@app.route('/api/devices', methods=['GET'])
def get_devices():
    return jsonify(load_devices())

@app.route('/api/optimize', methods=['POST'])
def optimize():
    buildings = get_buildings_summary()
    schedule = run_optimizer(buildings)
    return jsonify({"status": "ok", "schedule": schedule})

@app.route('/api/report-issue', methods=['POST'])
def report_issue():
    issue = request.json
    add_issue(issue)
    if issue.get("building_id"):
        flag_device(issue["building_id"])
    print(f"Issue reported: {issue}")
    return jsonify({"status": "flagged"})

@app.route('/api/issues', methods=['GET'])
def get_issues_route():
    return jsonify(get_issues())

@app.route('/api/resolve-issue', methods=['POST'])
def resolve_issue():
    data = request.json
    building_id = data.get('building_id')
    resolve_issue_in_csv(building_id)
    flag_device(building_id, flagged=False)
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')
