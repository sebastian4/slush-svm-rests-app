
Ext.define('svm.mycomp2', {
	extend : 'Ext.Component',
	alias: 'widget.svm.mycomp2',
	html: '<p>my html comp 2</p> <p>second paraf</p>',
	width: 200,
	label : ".",

	initComponent: function () {

		console.log("mycomp2 initComponent");

		// console.log(this.el);

		// this.labelEl = this.el.createChild({
  //           html : this.label
  //       });

        //parent
        this.callParent(arguments);
    }

});
