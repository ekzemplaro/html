#
#BROKER="mqtt.eclipseprojects.io"
BROKER="s2.ekzemplaro.site"
#
mosquitto_sub -d -h $BROKER \
    --topic /iwasaki/links2
