




	import './less/style.less';

	import Ractive from 'ractive';

	import S from './S';
	import N from './N';
	import BOOL from './BOOL';
	import NULL from './NULL';
	import B from './B';
	import SS from './SS';
	import NS from './NS';
	import BS from './BS';

	// the nested ones
	import L from './L';
	import M from './M';

	import appender from './M_appender.js';

	export default Ractive.extend({
		template: `

		<div class="awspilot-dynamodb-json-editor jsoneditor" style="{{style}}">
			<div class="jsoneditor-menu {{.['menu-class']}}" style="{{.['menu-style']}}">
				<select value='{{mode}}' style="height: 20px;margin: 6px;">
					<option value='tree'>Tree</option>
					<option value='code'>Code</option>
				</select>
			</div>
			{{#if ((mode === 'tree') && (navigationBar === true)) }}
				<div class="jsoneditor-navbar {{navbar-class}}" style={{.['navbar-style']}}></div>
			{{/if}}

			<div class="jsoneditor-outer has-main-menu-bar {{#if ((mode === 'tree') && (navigationBar === true)) }}has-nav-bar{{/if}}">
				{{#if mode === 'code'}}
					<textarea style="width: 100%;height: 100%;border: 0px;margin: 0px;padding: 0px;">{{ JSON.stringify(item, null, "\\t") }}</textarea>
				{{else}}
				<div class="jsoneditor-tree">
					<div class="jsoneditor-tree-inner">

						<table border=0 class="jsoneditor-tree">
							<colgroup><col width="24px"><col width="24px"><col></colgroup>
							<tbody>
								<tr class=" jsoneditor-expandable">
									<td></td>
									<td><button type="button" class="jsoneditor-button jsoneditor-contextmenu"></button></td>
									<td>
										<table class="jsoneditor-values" style="border-collapse: collapse; margin-left: 0px;">
											<tbody>
												<tr>
													<td class="jsoneditor-tree"><button type="button" class="jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}" on-click='@this.toggle('open')' ></button></td>
													<td class="jsoneditor-tree">
														<div contenteditable="false" class="jsoneditor-readonly">Item</div>
													</td>
													<td class="jsoneditor-tree"></td>
													<td class="jsoneditor-tree">
														<div class="jsoneditor-value jsoneditor-object">{ {{ Object.keys(item).length }} }</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
									<td>
									</td>
								</tr>
								{{#if open}}
									<appender level={{0}} index={{null}}/>
								{{#each item }}
									{{#if .hasOwnProperty('S')}}
										<S key={{@key}} value={{ .S }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('N')}}
										<N key={{@key}} value={{ .N }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('BOOL')}}
										<BOOL key={{@key}} value={{ .BOOL }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('NULL')}}
										<NULL key={{@key}} level="1" level="1" />
									{{/if}}

									{{#if .hasOwnProperty('B')}}
										<B key={{@key}} value={{ .B }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('L')}}
										<L key={{@key}} value={{ .L }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('M')}}
										<M key={{@key}} value={{ .M }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('SS')}}
										<SS key={{@key}} value={{ .SS }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('NS')}}
										<NS key={{@key}} value={{ .NS }} level="1" />
									{{/if}}

									{{#if .hasOwnProperty('BS')}}
										<BS key={{@key}} value={{ .BS }} level="1" />
									{{/if}}
									<appender level={{0}} index={{@key}}/>
								{{/each}}
								{{/if}}
							</tbody>
						</table>

					</div>
				</div>
				{{/if}}


			</div>
		</div>

		`,
		components: {
			S: S,
			N: N,
			BOOL: BOOL,
			NULL: NULL,
			B: B,
			SS: SS,
			NS: NS,
			BS: BS,

			// the nexted ones
			L: L,
			M: M,

			appender: appender,
		},

		data: function() {
			return {
				open: true,
				mode: 'tree', // tree | view | form | code | text | preview
				mainMenuBar: true,
				navigationBar: true,
				statusBar: true,
			}
		},
		prepend_attribute: function( type, idx, field_name ) {
			console.log('prepend', type, idx, field_name )

			var value = this.get('item')

			var to_add;

			if (type === "S")
				to_add = {S: ""}

			if (type === "N")
				to_add = {N: ""}

			if (type === "BOOL")
				to_add = {BOOL: ""}

			if (type === "NULL")
				to_add = {NULL: true}

			if (type === "B")
				to_add = {B: Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) }

			if (type === "SS")
				to_add = {SS: []}

			if (type === "NS")
				to_add = {NS: []}

			if (type === "BS")
				to_add = {BS: []}

			if (type === "L")
				to_add = {L: []}

			if (type === "M")
				to_add = {M: {}}

			var newmap = {}

			if (idx === null) {
				newmap[field_name] = to_add
				Object.keys(value).map(function(k) {
					newmap[k] = value[k];
				})
			} else {
				Object.keys(value).map(function(k) {
					newmap[k] = value[k];
					if (k === idx)
						newmap[field_name] = to_add
				})
			}

			this.set({item: {}})
			this.set({item:newmap})


		},
		delegate: false,
		elToFocus: null,
		delete_key: function( key ) {
			var item = this.get('item')
			delete item[key]
			this.set({item:item})
		},
		on: {

		},
	});
