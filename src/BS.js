
import B from './B';


export default Ractive.extend({
	components: {
		B: B,
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
						<td class='jsoneditor-datatype'>BinarySet[{{ value.length }}]</td>
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
				<div style='margin-left: {{ 24 * level + 40 }}px;'  on-click='prepend'></div>
			</td><td></td>
		</tr>
	{{#value}}
		{{#if !hide}}
		<B key={{@index}} value={{ . }} level='{{ level + 1 }}' />
		<tr class='jsoneditor-appender'>
			<td></td><td></td><td>
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>
			</td><td></td>
		</tr>
		{{/if}}
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
			hide: false, // used to hide and show elements to force re-render
		}
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		prepend: function() {
			var value = this.get('value')
			value = [ Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) ].concat(value)
			this.set({value:value})

			this.set('hide', true)
			this.set('hide', false )
		},
		elementinsert: function(e) {
			var value = this.get('value')
			var idx = parseInt(e.resolve().split('.').pop())
			value.splice( idx+1, 0, Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) )
			this.set({value:value})

			this.set('hide', true)
			this.set('hide', false )
		}
	}
})
