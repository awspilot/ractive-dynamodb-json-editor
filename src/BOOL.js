
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
						<!--<td class='jsoneditor-datatype'>Boolean</td> -->
						<td class='jsoneditor-separator'>:</td>
						<td class='jsoneditor-tree' style='width: 100%;'>
							<input value='{{value}}' class='jsoneditor-input jsoneditor-boolean {{#if (value !== true ) && (value !== false) }}error{{/if}}' on-keyup='validate' on-blur='validate' />
							<!--
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-boolean' >{{ value ? true : false }}</div>
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
	on: {
		init: function() {
		},
		validate: function() {
			if (this.get('value') === 'true')
				this.set('value', true )

			if (this.get('value') === 'false')
				this.set('value', false )

		},
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
})
