// Saves options to chrome.storage.sync.
function save_options() {
  var optionsJSON = JSON.parse(document.getElementById('options').value);
 // var likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set({
    dojoPlusOptions: optionsJSON,
    dojoPlusUpdated: Date()
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    dojoPlusOptions: "{colors: [ red:[200,12,7], blue:[8,2,240] ] }",
    dojoPlusUpdated: Date()
  }, function(items) {
    document.getElementById('options').value = JSON.stringify(items.dojoPlusOptions);
    document.getElementById('updated').value = items.dojoPlusUpdated;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);