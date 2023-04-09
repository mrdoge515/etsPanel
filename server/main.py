# flask --app main run --host="0.0.0.0"

from flask import Flask
import keyboard

app = Flask(__name__)

@app.route("/press/<key>")
def pressKey(key):
  keyboard.press_and_release(key)
  print(f'{key} pressed')
  return f'{key} pressed'
