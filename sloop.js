module.exports = function(buffer, start, duration, sampleLength){

  function sampler(){
    if(sampler.index >= sampler.duration) sampler.index = 0;
    sampler.index = sampler.start + sampler.index;
    var sample = sampler.buffer.slice(sampler.index, sampler.index + sampler.sampleLength);
    sampler.index += sampler.sampleLength;
    return sample
  }

  sampler.start = start;
  sampler.duration = duration * sampleLength;
  sampler.sampleLength = sampleLength
  sampler.index = 0;
  sampler.buffer = buffer;

  return sampler;

}
