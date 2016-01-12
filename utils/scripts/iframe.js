    function getLocation(href) {
        var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
        return match && {
            protocol: match[1],
            host: match[2],
            hostname: match[3],
            port: match[4],
            pathname: match[5],
            search: match[6],
            hash: match[7]
        }
    }

    function crossDomainPost() {
      // Add the iframe with a unique name
      var iframe = document.createElement("iframe");
      var uniqueString = "0192830192830";
      document.body.appendChild(iframe);
      //iframe.style.display = "none";
      iframe.style.width = "640px";
      iframe.style.height = "640px";
      iframe.contentWindow.name = uniqueString;

      // construct a form with hidden inputs, targeting the iframe
      var form = document.createElement("form");
      form.target = uniqueString;
      form.action = "http://qualoperadora.info/consulta";
      form.method = "POST";

      // repeat for each parameter
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = "tel";
      input.value = "84988130166";
      form.appendChild(input);


      var tel = getLocation('http://qualoperadora.info/consulta?tel=84988130166');
      alert(tel.search.split('=')[1]);

      document.body.appendChild(form);

      if ( iframe.contentDocument ){
        doc = iframe.contentDocument;
      }else if( iframe.contentWindow ){
        doc = iframe.contentWindow.document;
      }else if ( document.frames ){
        doc = document.frames[iframe.name].document;
      }else if( window.frames[iframe.name] ){
        doc = window.frames[iframe.name].document;
      }

      form.submit();

      /* in IE doc.readyState is bogus: immediately 'complete' */
      if ( !( !doc.readyState ||
                doc.readyState && doc.readyState == 'complete' ) )
                               { /*die*/}
      if ( !( doc.body && doc.body.innerHTML ) )
                               { /*die*/}
      /* get the response */
    }

    window.onload = crossDomainPost;