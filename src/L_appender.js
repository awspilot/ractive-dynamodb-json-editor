
import { IconTrash } from './svgicons';

export default Ractive.extend({
	components: {
		'icon-trash': IconTrash,
	},
	template: `
	{{#if type === null}}
	<tr class='jsoneditor-appender'>
		<td></td><td></td><td>
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>
		</td><td></td>
	</tr>
	{{/if}}

	{{#if type !== null }}
		<tr>
			<td>
				<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>
			</td>
			<td>
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>
			</td>
			<td>
				<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>
					<tbody>
						<tr>
							<td class='jsoneditor-tree'>
								<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>
							</td>
							<td class='jsoneditor-tree'>
								<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>*</div>
							</td>
							<td class='jsoneditor-separator'>:</td>
							<td class='jsoneditor-tree' style='width: 100%;'>
								<select value={{type}} on-change='typepicked' style='margin-top: 3px;'>
									<option value=''>Select Data Type</option>
									<option value='S'>String</option>
									<option value='N'>Number</option>
									<option value='BOOL'>Boolean</option>
									<option value='NULL'>Null</option>
									<option value='B'>Binary</option>
									<option value='SS'>StringSet</option>
									<option value='NS'>NumberSet</option>
									<option value='BS'>BinarySet</option>
									<option value='L'>List</option>
									<option value='M'>Map</option>
								</select>
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
	{{/if}}
	`,
	data: function() {
		return {
			type: null,
		}
	},
	on: {
		delete: function() {
			this.set({type: null,})
		},
		pickatype: function() {
			this.set({type: ''})
		},
		typepicked: function() {
			if (!this.get('type'))
				return;

			this.parent.prepend_attribute( this.get('type'), this.get('index'))
			this.set({type: null})
		}
	},
})
