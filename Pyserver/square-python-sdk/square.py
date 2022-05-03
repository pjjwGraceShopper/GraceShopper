from hmac import trans_36
from os import access
from flask import Flask, json, request, make_response, jsonify
from flask_cors import CORS, cross_origin
from square.client import Client
from dotenv import dotenv_values
from uuid import uuid4

config=dotenv_values(".env")
token=config['SQ_TOKEN']
transaction_id=uuid4()


# Setup flask server
app = Flask(__name__) 
CORS(app) # This will enable CORS for all routes


#----------------------------------------------------------------
# take environment variables from .env.
environment = config['SQ_ENVIRONMENT']
application_id=config['SQ_APPLICATION_ID']
application_secret=config['SQ_APPLICATION_SECRET']
base_url = "https://connect.squareup.com" if environment == "production" else "https://connect.squareupsandbox.com"
url = "{0}/oauth2/authorize?client_id={1}".format(base_url, application_id)
client = Client(
  access_token=config['SQ_TOKEN'],
  environment="sandbox",
  additional_headers={"content_type": "application/json"}
)


#----------------------------------------------------------------
# Setup url route which will calculate
# total sum of array.
@app.route('/hello', methods = ['get'],) 
def hello():
     
  print("you have reached the big Py")
  
  # Return data in json format 
  return json.dumps({"result": "Py data received"})
#--------------------------------------------------------------------------------------------------------------------------------
@app.route('/get', methods = ['get'])
def authorize():
  url = "{0}/oauth2/authorize?client_id={1}".format(base_url, application_id)
  return json.dumps({"result": url})
#--------------------------------------------------------------------------------------------------------------------------------
@app.route('/v2/payments', methods = ['post'])
def payment():
  result = client.payments.create_payment(
  body = {
    "source_id": "CASH",
    "idempotency_key": "{transaction_id}",
    "amount_money": {
      "amount": 0,
      "currency": "USD"
    },
    "cash_details": {
      "buyer_supplied_money": {
        "amount": 0,
        "currency": "USD"
      }
    }
  }
)
  print(transaction_id, "ID")
  # if result.is_success():
  #   print(result.body)
  # elif result.is_error():
  #   print(result.errors)
  # if result.is_success():
  #   print(result.body)
  # elif result.is_error():
  #   print(result.errors)
  return result.body




if __name__ == "__main__": 
    app.run(port=5000,  ssl_context=None, debug=True)
    