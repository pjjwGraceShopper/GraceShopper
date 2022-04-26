from flask import Flask, json, request, make_response, jsonify
from flask_cors import CORS, cross_origin
import json


# Setup flask server
app = Flask(__name__) 
CORS(app) # This will enable CORS for all routes

  
# Setup url route which will calculate
# total sum of array.
@app.route('/hello', methods = ['get'],) 
def hello():
     
    # data = request.get_json() 
    print("you have reached the big Py")
  
    # Data variable contains the 
    # data from the node server
   
    # Return data in json format 
    return json.dumps({"result": "Py data received"})
   
if __name__ == "__main__": 
    app.run(port=5000)