FROM node:19

COPY . /opt/code

WORKDIR /opt/code

RUN rm -rf node_modules package_lock.json && \
    npm install

CMD [ "/bin/sh", "-c", "/opt/code/run_instance.sh" ]