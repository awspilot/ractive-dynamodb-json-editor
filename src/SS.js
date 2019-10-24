
import S from './S';


export default Ractive.extend({
	components: {
		S: S,
	},
	template: `

	<tr class=' jsoneditor-expandable'>
		<td>
			<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>
		</td>
		<td>
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>
		</td>
		<td>
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>
				<tbody>
					<tr>
						<td class='jsoneditor-tree'>
							<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>
						</td>
						<td class='jsoneditor-tree'>
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>
						</td>
						<td class='jsoneditor-datatype'>StringSet[{{ value.length }}]</td>
						<td class='jsoneditor-tree'></td>
						<td class='jsoneditor-tree'>
							<div class='jsoneditor-value jsoneditor-array'></div>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
		<td>
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >
				<div class='trash-solid icon'></div>
			</button>
		</td>
	</tr>

	{{#if open}}
	<tr class='jsoneditor-appender'>
		<td></td><td></td><td>
			<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>
		</td><td></td>
	</tr>
	{{#value}}
		<S key={{@index}} value={{ . }} level='{{ level + 1 }}' />
		<tr class='jsoneditor-appender'>
			<td></td><td></td><td>
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>
			</td><td></td>
		</tr>
	{{/value}}
	{{/if}}

	<tr class='jsoneditor-append'></tr>

	`,
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
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		prepend: function() {
			var value = this.get('value')
			value = [""].concat(value)
			this.set({value:value})
		},
		elementinsert: function(e) {
			var value = this.get('value')
			var idx = parseInt(e.resolve().split('.').pop())
			value.splice( idx+1, 0, "" )
			this.set({value:value})
		}
	}
})
