
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
						<!--<td class='jsoneditor-datatype'>Number</td>-->\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input type='number' value='{{value}}' class='jsoneditor-input jsoneditor-number' />\
							<!--\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-number' >{{ value }}</div>\
							-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
		</td>\
	</tr>\
	",
})
