var AddConnection = React.createClass({displayName: "AddConnection",
  cancelPopover: function() {
    var ev = new CustomEvent('showAddConnection'); 
    ev.initEvent('showAddConnection');
    window.dispatchEvent(ev);
  },

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'add-connection': true,
      'is-active': this.props.visiblility,
    });

    var modalClasses = cx({
      'modal': true,
      'is-active': this.props.visiblility,
    });
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: classes}, 
          React.createElement("form", {onSubmit: this.addConstraints}, 
          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Gap"
            ), 
            React.createElement("input", {type: "text", id: "bind-width", autofocus: true})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Outer gap"
            ), 
            React.createElement("input", {type: "text", id: "bind-width", autofocus: true})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Contained in"
            ), 
            React.createElement("input", {type: "text", id: "bind-width", autofocus: true})
          ), 

          React.createElement("hr", null), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("button", {type: "submit"}, "Add constraints")
          )
        )
        ), 

        React.createElement("div", {onClick: this.cancelPopover, className: modalClasses})
      )
    );
  }
});

