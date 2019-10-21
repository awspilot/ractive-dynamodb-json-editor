
export default Ractive.extend({
	template: "\
	<tr class=''>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' title=''></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' title=''></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button jsoneditor-invisible' title=''></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>Boolean</td>\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input value='{{value}}' class='jsoneditor-input jsoneditor-boolean {{#if (value !== true ) && (value !== false) }}error{{/if}}' on-keyup='validate' on-blur='validate' />\
							<!--\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-boolean' title=''>{{ value ? true : false }}</div>\
							-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
	</tr>\
	",
	on: {
		init: function() {
		},
		validate: function() {
			if (this.get('value') === 'true')
				this.set('value', true )

			if (this.get('value') === 'false')
				this.set('value', false )

		}
	}
})
