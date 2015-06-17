var JGKIMLib = (function(JGKIMLib, $, undefined) {

    var object = {
        name : "object",
        age : 22,
        getName : function() {
            console.log("my name is " + name);
            console.log(this);
        }
    };

    var Calculator = function (_id, _value) { this.id = _id;
        this.value = _value;
    };
    return JGKIMLib; // 리턴을 해야함
})(window.JGKIMLib || {},jQuery); // 객체 없으면 생성 (namespace = window.namespace || {})
