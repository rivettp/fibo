(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["development"],{"0848":function(e,t,n){},"0cd5":function(e,t,n){"use strict";var a=n("0848"),o=n.n(a);o.a},e440:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("main",[n("article",[e._m(0),e._m(1),n("h3",[e._v("Build, Test, Deploy, Maintain Methodology")]),e._m(2),n("p",[e._v("\n        The FIBO is a grand vision; it is a standard that will be used across the financial industry for decades. It\n        will grow and adapt as the years go by and user demands change. It is therefore crucial that the FIBO Build,\n        Test, Deploy and Maintain process have clear and unambiguous goals expressed below.\n      ")]),n("h5",[e._v("Build")]),e._m(3),n("h5",[e._v("Test")]),n("p",[e._v('\n        Test includes unit tests, integration tests, "hygiene tests" and instance data tests that are automatically\n        run against the ontologies and related artifacts to ensure conformance to requirements.\n      ')]),n("h5",[e._v("Deployment")]),n("p",[e._v("\n        Deployment for FIBO began when an initial FIBO Conceptual Ontology (BCO) began to be formed in 2008 by a team\n        of Subject Matter Experts. FIBO is being used in the industry today. Examples can be found here and here. At\n        this writing, FIBO deployment includes popular\n        "),n("a",{attrs:{href:"fibo_owl.html"}},[e._v("OWL formats")]),e._v(",\n        "),n("router-link",{attrs:{to:"vocabulary"}},[e._v("SKOS")]),e._v(",\n        "),n("a",{attrs:{href:""}},[e._v("a Data Dictionary")]),e._v(",\n        "),n("a",{attrs:{href:""}},[e._v("\n          a Natural Language\n          Glossary\n        ")]),e._v(",\n        "),n("a",{attrs:{href:""}},[e._v("\n          UML conforming to the Semantic Modeling for Information Federation (SMIF)\n          specification\n        ")]),e._v(",\n        "),n("a",{attrs:{href:""}},[e._v("FIBOPedia")]),e._v(" and\n        "),n("a",{attrs:{href:""}},[e._v("Linked Data Fragments")]),e._v(". Within the industry,\n        FIBO as OWL, or any of its derived products such as the glossary and the data dictionary could be used as the\n        basis for a semantic graph database (aka RDF database or triple store) or any other type of database, be\n        integrated with reasoners, be offered as a web service, or within a service, or some other particular\n        architecture. In fact, FIBO is the ideal core set of ontologies for any financial institution that operates an\n        Enterprise Knowledge Graph.\n      ")],1),n("h5",[e._v("Maintenance")]),e._m(4),e._m(5)])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("span",[e._v("FIBO Development")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("\n        FIBO is being developed in a continuous process by\n        "),n("a",{attrs:{href:"working-group.html#fibo-working-groups"}},[e._v("\n          FIBO\n          Content Teams (FCT)\n        ")]),e._v(". To serve the wide array of users, FIBO is published quarterly on this website as\n        "),n("a",{attrs:{href:"products.html"}},[e._v("a variety of products")]),e._v(" in file formats and dialects ranging from HTML to JSON-LD.\n        All are generated, or derived from, the\n        "),n("a",{attrs:{href:"fibo_owl.html"}},[e._v("FIBO OWL")]),e._v(" system of record using the\n        Build-Test-Deploy-Maintain Methodology in a\n        continuous development process governed by automation including the Council-developed open source\n        RDF ToolKit, GitHub, Jenkins, SourceTree and a number of wikis for collaboration.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('\n        FIBO is viewed as being very similar to the build of a complex, open-source software system. Ontologies are\n        treated in the same way as "sources" like Java or C++ with the same challenges such as managing dependencies and\n        merging differences. Modern software engineering principles are therefore being applied to the process of\n        building FIBO ontologies including Test Driven Development (TDD), Continuous Integration and Continuous\n        Improvement. Additional principles specific to ontology development include adherence to modeling policies and\n        best practices, testing for logical consistency and testing for deductive closure.\n        These practices are highly dependent on automation to merge Build, Test, Deploy, and Maintain into a continuous\n        process. The orchestration of all the builds is done by an open source Continuous Integration platform called\n        '),n("a",{attrs:{href:"https://jenkins.edmcouncil.org"}},[e._v("Jenkins")]),e._v(". For every change in any branch in the\n        "),n("a",{attrs:{href:"https://github.com/edmcouncil/fibo"}},[e._v("GitHub based git-repository")]),e._v(' (accessible for members only) that\n        contains all the source OWL documents, Jenkins will start the so-called “ontology-publisher” which is a program\n        that executes fully automated "Build", "Test" and "Deployment" end-to-end in sequential stages. Deployment in\n        our case is also often called "Publish" because it means that the final version is published for the general\n        public at this website.\n      ')])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Build is the process of fleshing out FIBO as RDF/OWL model using W3C Standards. FIBO source files are\n        maintained in\n        "),n("a",{attrs:{href:"https://github.com/edmcouncil/fibo"}},[e._v("a private GitHub repository")]),e._v(" where the end\n        results of the build process and published on this website (see\n        "),n("a",{attrs:{href:"products.html"}},[e._v("\n          all FIBO\n          products\n        ")]),e._v(').\n        FIBO can be seen as a "product family" where each of the products in that family is generated with an\n        automated process, which is "the build" that\'s being done by "the ontology-publisher". So all products, like\n        the\n        '),n("a",{attrs:{href:"vocabulary.html"}},[e._v("FIBO Vocabulary")]),e._v(", are all derived from the original OWL source files that\n        reside in the GitHub repository (the up-to-date version of FIBO OWL can be downloaded\n        "),n("a",{attrs:{href:"fibo_owl.html"}},[e._v("here")]),e._v(").\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Maintenance is a continuous process where the FIBO GitHub Development Repository is central. All\n        "),n("a",{attrs:{href:"working-group.html"}},[e._v("FIBO Content Teams (FCT’s)")]),e._v(" apply changes to this git repository that are\n        documented in\n        "),n("a",{attrs:{href:"https://jira.edmcouncil.org"}},[e._v("JIRA")]),e._v('. For each discussed and approved JIRA-based\n        change request there can be one or more "committed changes" to that git repository where each series of\n        changes triggers the build process on Jenkins. Production-FIBO is the tested, vetted version and is published\n        quarterly. Development-FIBO is published as content is added and tested. FIBO automation extends opportunities\n        to all FIBO participants in the industry for both fixes and enhancements.\n      ')])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h6",[e._v("\n        See FIBO\n        "),n("a",{attrs:{href:"release.html"}},[e._v("Release Notes")]),e._v(".\n      ")])}],s={name:"development",components:{}},i=s,r=(n("0cd5"),n("2877")),l=Object(r["a"])(i,a,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=development.0f1da193.js.map