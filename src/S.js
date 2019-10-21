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
								<div contenteditable='true' spellcheck='false' class='jsoneditor-field'>{{key}} </div>\
							</td>\
							<!-- <td class='jsoneditor-datatype'>String</td> -->\
							<td class='jsoneditor-separator'>:</td>\
							<td class='jsoneditor-tree' style='width: 100%;'>\
								{{#if editing}}\
									<textarea class='jsoneditor-input jsoneditor-string' style='height: {{textarea_height}}px;line-height: {{line_height}}px' on-focus='focus' on-blur='blur' on-keyup='keyup' value='{{value}}'></textarea>\
								{{else}}\
									<div class='jsoneditor-value jsoneditor-string' style='cursor: pointer;height: {{line_height}}px;line-height: {{line_height}}px;overflow: hidden;' on-click='startEditing'>{{ JSON.stringify(value).substr(1).slice(0,-1) }}</div>\
								{{/if}}\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
		</tr>\
		",
		data: function() {
			return {
				line_height: 22,
				textarea_height: 22,
			}
		},
		on: {
			startEditing: function( el ) {
				var node = el.node.parentNode;
				this.set('editing',true)
				if (node.getElementsByTagName('textarea').length)
					node.getElementsByTagName('textarea')[0].focus()

			},
			focus: function() {

				var lines = this.get('value').split("\n").length
				this.set('textarea_height', lines * this.get('line_height') )
			},
			blur: function() {
				this.set('editing', false )
			},
			keyup: function() {
				var lines = this.get('value').split("\n").length
				this.set('textarea_height', lines * this.get('line_height') )
				console.log('keydown', lines )
			},
		}
	})
