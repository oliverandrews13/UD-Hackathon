from flask import Flask, jsonify, request
from flask_cors import CORS
from optimizer import run_optimizer
from data import buildings, issues_log

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/buildings', methods=['GET'])
def get_buildings():
    return jsonify(buildings)

@app.route('/api/optimize', methods=['POST'])
def optimize():
    data = request.json
    schedule = run_optimizer(data.get('buildings', buildings))
    return jsonify({"status": "ok", "schedule": schedule})

@app.route('/api/report-issue', methods=['POST'])
def report_issue():
    issue = request.json
    issues_log.append(issue)
    print(f"Issue reported: {issue}")
    return jsonify({"status": "flagged", "issue": issue})

@app.route('/api/issues', methods=['GET'])
def get_issues():
    return jsonify(issues_log)

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')