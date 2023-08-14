FROM mongo

RUN apt-get update && apt-get install -y wget unzip

RUN wget -O /data.zip https://archive.org/download/dump_release_tntvillage_2020-05-06/dump_release_tntvillage_2020-05-06.zip

RUN mkdir /dump && unzip -j /data.zip -d /dump && rm /data.zip

COPY mongo-update.sh /mongo-update.sh

CMD ["/mongo-update.sh"]

