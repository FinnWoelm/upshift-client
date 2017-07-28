/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  framework: 'mocha',
  disable_watching: true,
  parallel: 6,

  launch_in_ci: [
    "SL_Safari_Current",
    "SL_MS_Edge",
    "SL_IE_11",
    "SL_IE_10",
    "SL_IE_9",
    "PhantomJS"
  ],

  launch_in_dev: [
    'PhantomJS'
  ],

  "launchers": {
    SL_Safari_Current: {
      "command": "ember sauce:launch -b safari -v latest --visibility public --no-connect --url <url>",
      "protocol": "tap"
    },

    SL_MS_Edge: {
      "command": "ember sauce:launch -b microsoftedge -v latest --visibility public --no-connect -u '<url>'",
      "protocol": "tap"
    },

    SL_IE_11: {
      "command": "ember sauce:launch -b 'internet explorer' -v 11 --visibility public --no-connect -u '<url>'",
      "protocol": "tap"
    },

    SL_IE_10: {
      "command": "ember sauce:launch -b 'internet explorer' -v 10 --visibility public --no-connect -u '<url>'",
      "protocol": "tap"
    },

    SL_IE_9: {
      "command": "ember sauce:launch -b 'internet explorer' -v 9 --visibility public --no-connect -u '<url>'",
      "protocol": "tap"
    },

    SL_Chrome_Current: {
      "command": "ember sauce:launch -- -p 'Windows 10' -b chrome -v latest --no-connect -u '<url>'",
      "protocol": "tap"
    },

    SL_Firefox_Current: {
      "command": "ember sauce:launch -- -p 'Windows 10' -b firefox -v latest --no-connect -u '<url>'",
      "protocol": "tap"
    },

    SL_Safari_Last: {
      "command": "ember sauce:launch -- -b safari -v 8 --no-connect -u '<url>'",
      "protocol": "tap"
    },
  },
};
