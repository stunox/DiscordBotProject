const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      EVAL: {
        name: "eval",
        aliases: ["eval"],
        category: "admin",
        description: "Only for bot owner",
        ownerCmd: true,
        cooldown: 0.1,
        enable: true,
        usage: "<code>",
        botPerm: false,
        botPermName: '',
        permissions: false,
        reqPermName: "",
        args: true,
      },
    },
    MODERATION: {
      BAN: {
        name: "ban",
        aliases: ["ban"],
        category: "moderation",
        description: "Ban an user from the server.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@user {optional : reason}",
        botPerm: true,
        botPermName: 'BAN_MEMBERS',
        permissions: true,
        reqPermName: "BAN_MEMBERS",
        args: true,
      },
      KICK: {
        name: "kick",
        aliases: ["kick"],
        category: "moderation",
        description: "Kick an user from the server",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@user {optional : reason}",
        botPerm: true,
        botPermName: 'KICK_MEMBERS',
        permissions: true,
        reqPermName: "KICK_MEMBERS",
        args: true,
      },
    },
    OTHER: {
      ADD: {
        name: "add",
        aliases: ["i2z7", "invite", "help", "addbot"],
        category: "other",
        description: "Add the best bot to your server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        reqPermName: "",
        args: false
      },
      PING: {
        name: "ping",
        aliases: ["ping"],
        category: "other",
        description: "Gets the ping of bot",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        reqPermName: "",
        args: false
      },
      POLL: {
        name: "poll",
        aliases: ["poll"],
        category: "other",
        description: "Make a simple poll",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<poll>",
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: true,
        reqPermName: "MANAGE_ROLES",
        args: true
      },
      SAY: {
        name: "say",
        aliases: ["rep", "repeat"],
        category: "other",
        description: "Repeat a message",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<message>",
        botPerm: false,
        botPermName: '',
        permissions: false,
        reqPermName: "",
        args: true
      }
    },
  }
};

exports.MESSAGES = MESSAGES;