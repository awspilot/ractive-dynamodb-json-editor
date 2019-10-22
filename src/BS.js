
import B from './B';


export default Ractive.extend({
	components: {
		B: B,
	},
	template: "\
\
	<tr class=' jsoneditor-expandable'>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>BinarySet[{{ value.length }}]</td>\
						<td class='jsoneditor-tree'></td>\
						<td class='jsoneditor-tree'>\
							<div class='jsoneditor-value jsoneditor-array'></div>\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
	</tr>\
\
	{{#if open}}\
	{{#value}}\
		<B key={{@index}} value={{ . }} level='{{ level + 1 }}' convert_uint8_to_base64={{convert_uint8_to_base64}} />\
	{{/value}}\
	{{/if}}\
\
	<tr class='jsoneditor-append'></tr>\
\
	",
	data: function() {
		return {
			open: false,
		}
	},
})
