
import S from './S';
import N from './N';
import BOOL from './BOOL';
import NULL from './NULL';
import B from './B';
import SS from './SS';
import NS from './NS';
import BS from './BS';

//import L from './L';
import M from './M';

import appender from './L_appender.js';

import { IconTrash } from './svgicons';

var L = Ractive.extend({
	components: {
		S: S,
		N: N,
		BOOL: BOOL,
		NULL: NULL,
		B: B,
		SS: SS,
		NS: NS,
		BS: BS,

		//L: L,
		M: M,

		appender: appender,
		'icon-trash': IconTrash,
	},

	onconfig: function(options) {
		this.components['L'] = L;
		//this.components['M'] = M;
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
						<td class='jsoneditor-datatype'>List[{{ value.length }}]</td>
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
				<icon-trash />
			</button>
		</td>
	</tr>

	{{#if open}}
		<appender level={{level}} index={{null}}/>
	{{#value}}
		{{#if .hasOwnProperty('S')}}
			<S key={{@index}} value={{ .S }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('N')}}
			<N key={{@index}} value={{ .N }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('BOOL')}}
			<BOOL key={{@index}} value={{ .BOOL }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('NULL')}}
			<NULL key={{@index}} level='1' level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('B')}}
			<B key={{@index}} value={{ .B }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('L')}}
			<L key={{@index}} value={{ .L }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('M')}}
			<M key={{@index}} value={{ .M }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('SS')}}
			<SS key={{@index}} value={{ .SS }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('NS')}}
			<NS key={{@index}} value={{ .NS }} level='{{ level + 1 }}' />
		{{/if}}

		{{#if .hasOwnProperty('BS')}}
			<BS key={{@index}} value={{ .BS }} level='{{ level + 1 }}' />
		{{/if}}

		<appender level={{level}} index={{@index}}/>

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
	prepend_attribute: function( type, idx ) {

		var value = this.get('value')

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


		if (idx === null) {
			value = [to_add].concat(value)
		} else {
			value.splice( idx+1, 0, to_add )
		}


		this.set({value:value})
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
})
export default L
