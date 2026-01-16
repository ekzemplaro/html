#
message="Hello Mqtt "`date`
mosquitto_pub -d -m "${message}" --topic ads/voltage

