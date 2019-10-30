
export default Ractive.extend({
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
								<input value={{field_name}} placeholder='Attribute Name' style='margin-top: 3px;' />
							</td>
							<td class='jsoneditor-separator'>:</td>
							<td class='jsoneditor-tree' style='width: 100%;'>
								<select value={{type}} on-change='typepicked' style='margin-top: 3px;' disabled={{type_disabled}}>
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
					<div class='trash-solid icon'></div>
				</button>
			</td>
		</tr>
	{{/if}}
	`,
	data: function() {
		return {
			type: null,
			field_name: '',
			type_disabled: true,
		}
	},
	on: {
		init: function() {
			this.observe('field_name', function(n,o,kp) {
				if (n.trim()) {
					this.set({type_disabled: false})
				} else {
					this.set({type_disabled: true})
				}
			})
		},
		delete: function() {
			this.set({type: null,})
		},
		pickatype: function() {
			this.set({type: ''})
		},
		typepicked: function() {
			if (!this.get('type'))
				return;

			if (!this.get('field_name').trim())
				return;

			this.parent.prepend_attribute( this.get('type'), this.get('index'), this.get('field_name'))
			this.set({type: null})
		}
	},
})
