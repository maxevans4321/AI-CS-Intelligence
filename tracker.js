(function () {
    const Tracker = {
      init: function ({ userId, accountId }) {
        this.userId = userId;
        this.accountId = accountId;
      },
      track: function (event, properties = {}) {
        const payload = {
          event,
          properties,
          userId: this.userId,
          accountId: this.accountId,
          timestamp: new Date().toISOString(),
        };
        fetch("https://your-backend-url.com/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      },
    };
    window.Tracker = Tracker;
  })();
