OUTPUT="$(git branch | grep \* | cut -d ' ' -f2)"
if [ $OUTPUT = "main" ];
        then
                rsync -avz -e ssh _site/ --delete --omit-dir-times --no-perms user@dreamcraft-stable.guides.sashq-d.openstack.sas.com:/var/www/html/
        else
                echo "ERROR! -- Only the main branch can deploy to STABLE"
                exit
fi