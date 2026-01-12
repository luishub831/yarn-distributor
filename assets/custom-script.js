document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelectorAll('.custom-sidebar-cart__item').forEach(item => {
            const swatchImageElement = item.querySelector('.custom-swatch-image-url-cdn');

            if (swatchImageElement && swatchImageElement.hasAttribute('swatchImage')) {
                let swatchImage = swatchImageElement.getAttribute('swatchImage');
                console.log(swatchImage);

                const imageElement = item.querySelector(".cart-item__image-custom");
                if (imageElement) {
                    imageElement.setAttribute('src', swatchImage);
                }
            } else {
                console.log('Swatch image attribute not found for item:', item);
            }
        });
    }, 1000);

    formatPrices();

    const observer = new MutationObserver(function(mutations) {
        let shouldFormat = false;
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) {
                        const priceElements = node.querySelectorAll && node.querySelectorAll('.product-card__price-item, .vertical-product-card__price-item, .horizontal-product-card__price-item, .product-price__current-price');
                        if (priceElements && priceElements.length > 0) {
                            shouldFormat = true;
                        }
                    }
                });
            }
        });

        if (shouldFormat) {
            setTimeout(formatPrices, 100);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

function formatPrices() {
    const priceSelectors = [
        '.product-card__price-item',
        '.vertical-product-card__price-item',
        '.horizontal-product-card__price-item',
        '.product-price__current-price'
    ];

    priceSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(function(priceDiv) {
            if (priceDiv.querySelector('.cents')) {
                return;
            }

            let originalText = priceDiv.textContent.trim();
            let priceText = originalText;

            let fromText = '';
            if (priceText.toLowerCase().startsWith('from ')) {
                fromText = 'From ';
                priceText = priceText.substring(5).trim();
            }
            if (priceText.toLowerCase().startsWith('rrp ')) {
                fromText = 'RRP ';
                priceText = priceText.substring(4).trim();
            }

            let priceMatch = priceText.match(/\$?(\d+(?:\.\d{1,2})?)/);
            if (!priceMatch) {
                return;
            }

            let numericPrice = priceMatch[1];

            if (!numericPrice.includes('.')) {
                numericPrice += '.00';
            } else if (numericPrice.split('.')[1].length === 1) {
                numericPrice += '0';
            }

            let parts = numericPrice.split('.');
            let dollars = parts[0];
            let cents = parts[1];

            let newContent = fromText + `$${dollars}.<span class="cents">${cents}</span>`;

            priceDiv.innerHTML = newContent;
        });
    });
}



const priceFormattingStyles = `
  .product-card__price-item .cents,
  .vertical-product-card__price-item .cents,
  .horizontal-product-card__price-item .cents {
    font-size: inherit;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = priceFormattingStyles;
document.head.appendChild(styleSheet);
