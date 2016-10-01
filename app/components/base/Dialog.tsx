/*
<dom-module id="expedition-dialog">
  <style>
    :host paper-dialog {
      font-family: var(--font-body);
      font-size: var(--font-size-flavortext);
      background-color: var(--background-color-primary);
      color: var(--font-color-primary);
      margin: var(--vh-large) var(--vw-large);
      padding: 0;
      overflow-y:auto;
      overflow-x:hidden;
      line-height: 1.2;
    };

    :host #title {
      margin-left: var(--vw-large);
      line-height: 2em;
    };
    :host paper-icon-button#closebtn {
      float: right;
      padding: var(--vw-base);
      margin:0;
      width: var(--vw-huge);
    };

    :host paper-dialog h2 {
      padding-top: var(--vh-base);
      font-family: var(--font-header);
      font-size: var(--font-size-header);
      margin: 0;
      margin-top: -var(--vh-base);
      width: 100%;
      padding-right: var(--vh-large);
      background-color: var(--background-color-accent);
    };

    :host.dark paper-dialog {
      background-color: var(--background-color-dark-primary);
      border: var(--border-size) solid var(--border-color-dark-primary);
      color: var(--font-color-dark-primary);
    }

    :host.dark paper-dialog h2 {
      background-color: var(--background-color-dark-accent);
    };

    :host.dark paper-dialog ::content a {
      background-color: var(--background-color-dark-primary);
      margin-top: var(--vh-base);
    };

    :host #content {
      padding: var(--vw-base);
    };
  </style>
  <template>
    <paper-dialog id="dialog" modal>
      <h2>
        <span id="title">{{title}}</span>
        <paper-icon-button id="closebtn" icon="icons:close" on-tap="close"></paper-icon-button>
      </h2>
      <div id="content">
        <content></content>
      </div>
    </paper-dialog>
  </template>
  <script>
    Polymer({
      is: 'expedition-dialog',
      behaviors: [GlobalsBehaviour],
      ready: function() {
        if (this.dark) {
          this.className = "dark";
        }
        this._open = false;
      },
      open: function() {
        this.$.dialog.open();
        this._open = true;
      },
      close: function() {
        this.$.dialog.close();
        this.fire('dialog-close');
        this._open = false;
      },
      isOpen: function() {
        return this._open;
      },
      properties: {
        title: String,
        dark: Boolean
      }
    });
  </script>
</dom-module>

*/