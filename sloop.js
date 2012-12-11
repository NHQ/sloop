module.exports = function(buffer, start, duration, byteLength){

  function sampler(){
    if(sampler.index >= sampler.duration) sampler.index = 0;
    sampler.index = sampler.start + sampler.index;
    var sample = sampler.buffer.slice(sampler.index, sampler.index + sampler.byteLength);
    sampler.index += sampler.byteLength;
    return sample
  }

  sampler.start = start;
  sampler.duration = duration;
  sampler.byteLength = byteLength
  sampler.index = 0;
  sampler.buffer = buffer;

  return sampler;

}
