
export default Ractive.extend({
	template: "\
	<tr>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>Binary</td>\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input value='{{updated_value}}' class='jsoneditor-input jsoneditor-binary' />\
							<!--\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-binary' >{{ updated_value }}</div>\
							-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
	</tr>\
	",
	data: function() {
		return {
			updated_value: '',
		}
	},
	on: {
		init: function() {
			var value = this.get('value')
			if ( typeof value === "string") {
				this.set({ updated_value: JSON.parse(JSON.stringify(value))})
				value = Uint8Array.from(atob(value), function(c) { return c.charCodeAt(0) })
				this.set({value: value })
			}

			if ( value instanceof Uint8Array ) {
				this.set({ updated_value: btoa(String.fromCharCode.apply(null, value )) })


				// this would convert Uint8Array to b64, but for aws-sdk we need Uint8Array
				// value = btoa(String.fromCharCode.apply(null, value ))
				// this.set({value: value })

			}


			this.observe('updated_value', function(n,o, kp ) {

				console.log('changed', n, o )

				if ( typeof value === "string")
					return this.set('value', n )

				try {
					var new_ui8 = Uint8Array.from(atob(n), function (c) { return c.charCodeAt(0) } );
					this.set({value: new_ui8 })
					console.log(new_ui8)
				} catch (e) {}



			})

		},
	}
})
