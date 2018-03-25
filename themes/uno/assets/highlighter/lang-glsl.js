// Copyright (C) 2014 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * @fileoverview
 * Registers a language handler GLSL.
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-glsl">(glsl code)</pre>
 *
 * @author gman@chromium.org
 */

PR['registerLangHandler'](
  PR['createSimpleLexer'](
    [
      // Whitespace.
      [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0']
    ],
    [
      // Script tag.
      [PR['PR_COMMENT'], /^#!(?:.*)/],

      // `import`, `library`, `part of`, `part`, `as`, `show`, and `hide`
      // keywords.
      [PR['PR_KEYWORD'], /^\b(?:import|as)\b/i],

      // Single-line comments.
      [PR['PR_COMMENT'], /^\/\/(?:.*)/],

      // Multiline comments.
      [PR['PR_COMMENT'], /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//], // */

      // `class` and `interface` keywords.
      [PR['PR_KEYWORD'], /^\b(?:class|union|enum|typedef|template|interface|struct)\b/],

      // General keywords.
      [PR['PR_KEYWORD'], /^\b(?:precision|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|discard|return|common|partition|active|asm|resource|goto|filter|sizeof|cast|namespace|using)\b/],

      // Declaration keywords.
      [PR['PR_KEYWORD'], /^\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|in|out|inout|lowp|mediump|highp|this|inline|noinline|public|static|extern|external|invariant|precise|input|output)\b/],

      // Keywords for types.
      [PR['PR_TYPE'], /^\b(?:atomic_uint|float|double|int|void|bool|mat2|mat3|mat4|dmat2|dmat3|dmat4|mat2x2|mat2x3|mat2x4|dmat2x2|dmat2x3|dmat2x4|mat3x2|mat3x3|mat3x4|dmat3x2|dmat3x3|dmat3x4|mat4x2|mat4x3|mat4x4|dmat4x2|dmat4x3|dmat4x4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|dvec2|dvec3|dvec4|uint|uvec2|uvec3|uvec4|sampler1D|sampler2D|sampler3D|samplerCube|sampler1DShadow|sampler2DShadow|samplerCubeShadow|sampler1DArray|sampler2DArray|sampler1DArrayShadow|sampler2DArrayShadow|isampler1D|isampler2D|isampler3D|isamplerCube|isampler1DArray|isampler2DArray|usampler1D|usampler2D|usampler3D|usamplerCube|usampler1DArray|usampler2DArray|sampler2DRect|sampler2DRectShadow|isampler2DRect|usampler2DRect|samplerBuffer|isamplerBuffer|usamplerBuffer|sampler2DMS|isampler2DMS|usampler2DMS|sampler2DMSArray|isampler2DMSArray|usampler2DMSArray|samplerCubeArray|samplerCubeArrayShadow|isamplerCubeArray|usamplerCubeArray|image1D|iimage1D|uimage1D|image2D|iimage2D|uimage2D|image3D|iimage3D|uimage3D|image2DRect|iimage2DRect|uimage2DRect|imageCube|iimageCube|uimageCube|imageBuffer|iimageBuffer|uimageBuffer|image1DArray|iimage1DArray|uimage1DArray|image2DArray|iimage2DArray|uimage2DArray|imageCubeArray|iimageCubeArray|uimageCubeArray|image2DMS|iimage2DMS|uimage2DMS|image2DMSArray|iimage2DMSArray|uimage2DMSArray|long|short|half|fixed|unsigned|superp|sampler3DRect|hvec2|hvec3|hvec4|fvec2|fvec3|fvec4)\b/],

      // Keywords for constants.
      [PR['PR_KEYWORD'], /^\b(?:false|true)\b/],

      // Multiline strings, single- and double-quoted.
      [PR['PR_STRING'], /^r?[\']{3}[\s|\S]*?[^\\][\']{3}/],
      [PR['PR_STRING'], /^r?[\"]{3}[\s|\S]*?[^\\][\"]{3}/],

      // Normal and raw strings, single- and double-quoted.
      [PR['PR_STRING'], /^r?\'(\'|(?:[^\n\r\f])*?[^\\]\')/],
      [PR['PR_STRING'], /^r?\"(\"|(?:[^\n\r\f])*?[^\\]\")/],

      // Identifiers.
      [PR['PR_PLAIN'], /^[a-z_][a-z0-9_]*/i],

      // Operators.
      [PR['PR_PUNCTUATION'], /^[~!%^&*+=|?:<>/-]/],

      // Hex numbers.
      [PR['PR_LITERAL'], /^\b0x[0-9a-f]+/i],

      // Decimal numbers.
      [PR['PR_LITERAL'], /^\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i],
      [PR['PR_LITERAL'], /^\b\.\d+(?:e[+-]?\d+)?/i],

      // Punctuation.
      [PR['PR_PUNCTUATION'], /^[(){}\[\],.;]/]
    ]),
  ['glsl']);
