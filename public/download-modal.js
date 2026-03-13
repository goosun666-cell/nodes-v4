console.log('Download modal script loaded.');
// Create and inject download modal
const modalHTML = `
    <div id="downloadModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:2000; justify-content:center; align-items:center;">
        <div style="background:#111; padding:20px; border-radius:8px; text-align:center; border:1px solid #333; color:#fff;">
            <p>Do you want to download the Whitepaper?</p>
            <button onclick="confirmDownload()" style="padding:10px 20px; margin:10px; cursor:pointer;">Yes</button>
            <button onclick="closeModal()" style="padding:10px 20px; margin:10px; cursor:pointer;">No</button>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

function openModal() { document.getElementById('downloadModal').style.display = 'flex'; }
function closeModal() { document.getElementById('downloadModal').style.display = 'none'; }
function confirmDownload() {
    window.location.href = '/GOSUN_Whitepaper_V1.0.pdf';
    closeModal();
}
