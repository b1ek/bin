FROM node:19

COPY . /opt/code

WORKDIR /opt/code

RUN rm -rf node_modules package_lock.json && \
    npm install

# global deps
RUN npm i -g gulp-cli

CMD [ "/bin/sh", "-c", "/opt/code/run_instance.sh" ]