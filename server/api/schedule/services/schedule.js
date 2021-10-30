'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    find(params, populate) {
        return strapi.query('schedule').find(params, [
            "day_schedule.events.hosts",  "day_schedule.events.hosts.profile_picture"
        ]);
      },
};
