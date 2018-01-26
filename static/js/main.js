/*
Template Name: Effacy - Creative One Page Template
Author: ThemeBite
Author URI: http://themebite.com/
Version: 1.0
Developed and Designed By: ThemeBite + bits by Tamara Natasya
*/

$(window).load(function() {
  Particles.init({
    selector: '.header__background',
    color: '#FFFFFF',
    maxParticles: 130,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 80
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 50
        }
      }
    ]
  });

  "use strict";

  // Parallax Effect
  (function() {

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

      } else {
          $(window).stellar({
              horizontalScrolling: false,
              responsive: true,
          });
      }

  }());
});

var lnStickyNavigation;

$(document).ready(function()
{
	applyHeader();
	applyNavigation();
	applyMailTo();
	applyResize();
	checkHash();
	checkBrowser();
});

/* HEADER FUNCTIONS */
function applyHeader()
{
	$('.jumbotron').css({ height: ($(window).height()) +'px' });

	lazyLoad($('.jumbotron'));
}

function lazyLoad(poContainer)
{
	/*var lstrSource   = poContainer.attr('data-src');
	var lstrPosition = poContainer.attr('data-position');

	$('<img>').attr('src', lstrSource).load(function()
	{
		poContainer.css('background-image', 'url("'+ lstrSource +'")');
		poContainer.css('background-position', lstrPosition);
		poContainer.css('-ms-filter', '"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + lstrSource + '\', sizingMethod=\'scale\')"');
		poContainer.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + lstrSource + '\', sizingMethod=\'scale\'');
	});*/
}

/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
	applyClickEvent();
	applyNavigationFixForPhone();
	applyScrollSpy();
	applyStickyNavigation();
}

function applyClickEvent()
{
	$('a[href*=#]').on('click', function(e)
	{
		e.preventDefault();
		if( $( $.attr(this, 'href') ).length > 0 )
		{
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}
		return false;
	});
}

function applyNavigationFixForPhone()
{
	$('.navbar li a').click(function(event)
	{
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
}

function applyScrollSpy()
{
	$('#navbar-example').on('activate.bs.scrollspy', function()
	{
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function applyStickyNavigation()
{
	lnStickyNavigation = $('.scroll-down').offset().top + 20;

	$(window).on('scroll', function()
	{
		stickyNavigation();
	});

	stickyNavigation();
}

function stickyNavigation()
{
	if($(window).scrollTop() > lnStickyNavigation)
	{
		$('body').addClass('fixed');
	}
	else
	{
		$('body').removeClass('fixed');
	}
}

/* RESIZE FUNCTION */

function applyResize()
{
	$(window).on('resize', function()
	{
		lnStickyNavigation = $('.scroll-down').offset().top + 20;

		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	});
}

/* IE7- FALLBACK FUNCTIONS */

function checkBrowser()
{
	var loBrowserVersion = getBrowserAndVersion();

	if(loBrowserVersion.browser == 'Explorer' && loBrowserVersion.version < 8)
	{
		$('#upgrade-dialog').modal({
			backdrop: 'static',
			keyboard: false
		});
	}
}

function getBrowserAndVersion()
{
	var laBrowserData = [{
		string: 		navigator.userAgent,
		subString: 		'MSIE',
		identity: 		'Explorer',
		versionSearch: 	'MSIE'
	}];

	return {
		browser: searchString(laBrowserData) || 'Modern Browser',
		version: searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || '0.0'
	};
}

function searchString(paData)
{
	for(var i = 0; i < paData.length; i++)
	{
		var lstrDataString 	= paData[i].string;
		var lstrDataProp 	= paData[i].prop;

		this.versionSearchString = paData[i].versionSearch || paData[i].identity;

		if(lstrDataString)
		{
			if(lstrDataString.indexOf(paData[i].subString) != -1)
			{
				return paData[i].identity;
			}
		}
		else if(lstrDataProp)
		{
			return paData[i].identity;
		}
	}
}

function searchVersion(pstrDataString)
{
	var lnIndex = pstrDataString.indexOf(this.versionSearchString);

	if(lnIndex == -1)
	{
		return;
	}

	return parseFloat(pstrDataString.substring(lnIndex + this.versionSearchString.length + 1));
}
