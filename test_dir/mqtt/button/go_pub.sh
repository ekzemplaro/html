mosquitto_pub \
  -h broker.hivemq.com \
  -p 8000 \
  -t "test/topic" \
  -m "Hello from mosquitto_pub" \
  -V mqttv311 \
  --websockets
