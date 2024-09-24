from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def map_page():
    return render_template('map.html')

@app.route('/record')
def record_page():
    return render_template('record.html')

@app.route('/test')
def test_page():
    return render_template('test.html')

if __name__ == '__main__':
    app.run(debug=True)
