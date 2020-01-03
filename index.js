"use strict";
const admin = require("firebase-admin");
var Trigger = global.TriggerClass;

class triggerFirebase extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  start() {

    let _this = this;
    let serviceAccount = require(_this.params.config.serviceAccount);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: _this.params.config.databaseURL,
    });

    let db = admin.database();
    let initialDataLoaded = false;
    let ref = db.ref(_this.params.document);

    ref.on('child_added', function (snapshot) {
      if (initialDataLoaded) {
        const checkCalendar = true;
        const inputValues = snapshot.val();
        const customValues = snapshot.val();

        _this.startChain(checkCalendar, inputValues, customValues)
          .then(() => { })
          .catch(err => {
            _this.logger.error("startChain error (triggerFirebase):", err);
          });
      }
    });

    ref.once('value', function (snapshot) {
      initialDataLoaded = true;
    });
  }
}

module.exports = triggerFirebase;
