
import { IconTrash } from './svgicons';

export default Ractive.extend({
	components: {
		'icon-trash': IconTrash,
	},
	template: `
	<tr>
		<td>
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>
		</td>
		<td>
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>
		</td>
		<td>
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>
				<tbody>
					<tr>
						<td class='jsoneditor-tree'>
							<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>
						</td>
						<td class='jsoneditor-tree'>
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>
						</td>
						<!--<td class='jsoneditor-datatype'>Number</td>-->
						<td class='jsoneditor-separator'>:</td>
						<td class='jsoneditor-tree' style='width: 100%;'>
							<input type='number' value='{{mirror_value}}' class='jsoneditor-input jsoneditor-number'  />
							<!--
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-number' >{{ value }}</div>
							-->
						</td>
					</tr>
				</tbody>
			</table>
		</td>
		<td>
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >
				<icon-trash />
			</button>
		</td>
	</tr>
	`,
	data: function() {
		return {
			mirror_value: '',
		}
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		init: function() {
			var value = this.get('value')
			this.set('mirror_value', value )
			this.observe("mirror_value", function( n, o, kp ) {
				this.set({value: parseFloat(n) ? n.toString() : '' })
			})
		},
	}
})
