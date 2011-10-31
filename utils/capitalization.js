jQuery.extend(KhanUtil, {
	toCamelCase: function( s ) {
		return s.replace(/(\ [A-Za-z])/g, function($1){return $1.toUpperCase().replace(' ','');});;
	}
});
