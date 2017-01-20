System.register([], function(exports_1) {
    var Foo;
    return {
        setters:[],
        execute: function() {
            /**
             * [Foo description]
             * @type {[type]}
             */
            Foo = (function () {
                /**
                 * [constructor description]
                 * @param {number} id   [description]
                 * @param {string} name [description]
                 * @param {string} link [description]
                 * @param {string} info [description]
                 */
                function Foo(id, name, link, info) {
                    this.id = id;
                    this.name = name;
                    this.link = link;
                    this.info = info;
                }
                return Foo;
            })();
            exports_1("Foo", Foo);
        }
    }
});
//# sourceMappingURL=foo.js.map