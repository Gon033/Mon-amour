document.getElementById('sendMessageBtn').addEventListener('click', function() {
    var message = document.getElementById('messageInput').value;
    var phoneNumber = '6361366019';

    var encodeMessage = encodeURIComponent(message);
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

    window.open(whatsappLink, '_blank');
});
