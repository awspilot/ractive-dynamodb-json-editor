
import S from './S';
import N from './N';
import BOOL from './BOOL';
import NULL from './NULL';
import B from './B';
import SS from './SS';
import NS from './NS';
import BS from './BS';

import L from './L';
//import M from './M';

var M = Ractive.extend({
	components: {
		S: S,
		N: N,
		BOOL: BOOL,
		NULL: NULL,
		B: B,
		SS: SS,
		NS: NS,
		BS: BS,

		L: L,
	},

	onconfig: function(options) {
		this.components['M'] = M;
		this.components['L'] = L; // M doenst know L without this
	},

	template: "\
\
		<tr class=' jsoneditor-expandable'>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
			</td>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
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
							<td class='jsoneditor-datatype'>Map{{ '{' + Object.keys(value).length + '}' }}</td>\
							<td class='jsoneditor-tree'></td>\
							<td class='jsoneditor-tree'>\
								<div class='jsoneditor-value jsoneditor-object'></div>\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
		</tr>\
\
		{{#if open}}\
		{{#each value }}\
			{{#if .hasOwnProperty('S')}}\
				<S key={{@key}} value={{ .S }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('N')}}\
				<N key={{@key}} value={{ .N }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('BOOL')}}\
				<BOOL key={{@key}} value={{ .BOOL }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('NULL')}}\
				<NULL key={{@key}} level='1' level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('B')}}\
				<B key={{@key}} value={{ .B }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('L')}}\
				<L key={{@key}} value={{ .L }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('M')}}\
				<M key={{@key}} value={{ .M }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('SS')}}\
				<SS key={{@key}} value={{ .SS }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('NS')}}\
				<NS key={{@key}} value={{ .NS }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('BS')}}\
				<BS key={{@key}} value={{ .BS }} level='{{ level + 1 }}' />\
			{{/if}}\
\
		{{/each}}\
		{{/if}}\
\
\
		<tr class='jsoneditor-append'></tr>\
\
	",
	data: function() {
		return {
			open: true,
		}
	},
})

export default M;
