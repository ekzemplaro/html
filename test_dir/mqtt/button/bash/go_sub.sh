BROKER="mqtt.eclipseprojects.io"
#
mosquitto_sub -d -t orz -h $BROKER \
    --topic /iwasaki/links2
