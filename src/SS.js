
import S from './S';


export default Ractive.extend({
	components: {
		S: S,
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
						<td class='jsoneditor-datatype'>StringSet[{{ value.length }}]</td>\
						<td class='jsoneditor-tree'></td>\
						<td class='jsoneditor-tree'>\
							<div class='jsoneditor-value jsoneditor-array'></div>\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
		</td>\
	</tr>\
\
	{{#if open}}\
	{{#value}}\
		<S key={{@index}} value={{ . }} level='{{ level + 1 }}' />\
	{{/value}}\
	{{/if}}\
\
	<tr class='jsoneditor-append'></tr>\
\
	",
	delete_key: function( key ) {
		var value = this.get('value')
		value = value.filter(function(v,idx,arr) { return idx !== key })
		this.set({value:value})
	},
	data: function() {
		return {
			open: false,
		}
	},
})
