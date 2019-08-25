#
SRC="/home/uchida/html/"
#TARGET="uchida@sunflower.local:/var/www/html/"
#TARGET="uchida@tulip.local:/var/www/html/"
#TARGET="uchida@fj123:/var/www/html/"
TARGET="uchida@lily.local:/var/www/html/"
# TARGET="uchida@ekzemplaro.org:html/"
#
for folder in test_dir
do
	rsync -avz --delete -e "ssh" $SRC$folder"/" $TARGET$folder
done
#
#
